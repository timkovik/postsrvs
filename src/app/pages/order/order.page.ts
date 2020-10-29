import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Network } from '@ionic-native/network/ngx';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CacheService } from 'ionic-cache';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Meta } from 'src/app/interfaces/meta';
import { Order } from 'src/app/interfaces/order';
import { DeliveredComponent } from '../../components/delivered/delivered.component';
import { NotDeliveredComponent } from '../../components/not-delivered/not-delivered.component';
import { PartDeliveredComponent } from '../../components/part-delivered/part-delivered.component';
import { Reason } from '../../interfaces/reason';
import { Statuses } from '../../interfaces/statuses';
import { AuthService } from '../../services/auth.service';
import { CourierService } from '../../services/courier.service';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';
import { SysService } from '../../services/sys.service';
import { MapService } from '../../services/sys/map.service';
import { OrderService } from '../../services/sys/order.service';
import { DrawPage } from '../draw/draw.page';
import { DataService } from './../../services/sys/data.service';

@Component({
  selector: 'app-order',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '264px',
      })),
      state('closed', style({
        height: '50px',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])],
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  public orderId: string = null;
  public clientId: string = null;
  public status_id: number = null;
  public status: string = null;
  public goods: any = null;
  public address: any = null;
  public order: Order = null;
  public name: string = null;
  public timeFrom: string = null;
  public timeTo: string = null;
  public phone: string = null;
  public pageInit = true;
  public statuses: Statuses[] = [
    { id: 4, status: 'Не доставлено' },
    { id: 5, status: 'Доставлено' },
    { id: 6, status: 'Частично доставлено' },
  ];
  public reasons: Reason[] = [
    { id: 1, reason: 'Не удалось Дозвониться!' },
    { id: 2, reason: 'Отказ, при созвоне с клиентом' },
    { id: 3, reason: 'Отказ от доставки без объяснения причины' },
    { id: 4, reason: 'Ошибка оформления ИМ' },
    { id: 5, reason: 'Получатель передумал' },
    { id: 6, reason: 'Товар не подошел/не понравился' },
    { id: 7, reason: 'Финансовые трудности у получателя' },
    { id: 8, reason: 'Перенос даты доставки получателем.' },
    { id: 10, reason: 'Не успел' },
    { id: 11, reason: 'Переехали/нев.Адрес' },
  ];
  public commentText: any = null;
  public g_quants: any = {};
  public changeWindow = false;
  public selectedPayment = '1';
  public client_status = '';
  public client_status_dt = '';
  public client_status_id = '';
  public vlog: string = null;
  public poruch: string = null;
  public mass: unknown = null;
  public amount: unknown = null;
  public email_input = '';
  public phone_input = '';
  public barcode_flag = false;
  public barcode_url: string = null;
  public barcode: unknown = null;
  public selectedReason: any = null;
  public selectedStatus: any = null;
  public hide_status = false;
  public $codeStop: Subject<any> = new Subject();
  public showPhone = false;
  public podrazd: unknown = null;
  public email_error = false;
  public pay_access = false;
  public pay_access_data: any = null;
  public show_info = false;
  public show_email = false;
  public callWindow = false;
  public drawimage = false;
  public imageToShow: string = null;
  coords: Array<any>;
  public orderPhones: Array<string> = [];
  public selectedPhone: string;
  public note: string;
  public new_plan_date: string; // Дата переноса заказа
  public openCompany = false;
  public checkBase64Image: string;
  public drawNeedle = true;
  public cardNums: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courier: CourierService,
    private state$: StateService,
    private auth: AuthService,
    private http: HttpClient,
    private CL: CallNumber,
    public sys: SysService,
    public settings: SettingsService,
    private sysMap: MapService,
    private data: DataService,
    private storage: Storage,
    private cache: CacheService,
    private network: Network,
    private orderService: OrderService,
    public modalController: ModalController,
    private firebase: FirebaseX
  ) {
    this.orderId = this.route.snapshot.paramMap.get('id');

    const img = localStorage.getItem('drawImg');
    if (img) {
      this.imageToShow = `data:image/jpg;base64,${img}`;
    }
  }

  ngOnInit() {
    this.initOrder();
    this.courier.initStatuses();
    this.note = localStorage.getItem(this.orderId);
    this.firebase.setScreenName('order');
  }

  ngAfterViewChecked() {
    const img = localStorage.getItem('drawImg');
    if (img) {
      this.imageToShow = `data:image/jpg;base64,${img}`;
    }
  }

  public sendPost(url: string, data: any) {
    data = JSON.stringify(data);

    return this.http.post(url, data);
  }

  public async drawBtn(need: boolean) {
    this.drawNeedle = need;
    if (need) {
      this.draw();
    } else {
      localStorage.removeItem('drawImg');
    }
  }
  public async draw() {
    const modal = await this.modalController.create({
      component: DrawPage,
      showBackdrop: false
    });
    await modal.present();
    const details = await modal.onDidDismiss();
    console.log('sys:: drawModal dismiss details: ', details);
    if (details.data == 'ok') {
      this.doneOrder();
    }
  }

  public parsePhone(phone: string): Array<string> {
    const phones: Array<string> = [];
    phone = phone.replace(/\D+/g, '');

    while (phone.length > 7) {
      phone = this.normalizePhoneNumber(phone);
      phones.push(phone.slice(null, 11));
      phone = phone.slice(11);
    }

    return phones;
  }

  private normalizePhoneNumber(phone: string): string {
    if (phone[0] !== '8' && phone[0] !== '7' && phone.length !== 11) {
      phone = `8${phone}`;
    }
    if (phone.length == 7 || phone.length == 10) {
      phone = `8${phone}`;
    }
    if (phone[0] !== '8' && phone.length == 11) {
      phone = `8${phone.slice(1)}`;
    }
    return phone;
  }

  public phoneClick(action: string) {
    this.orderPhones = this.parsePhone(this.phone);
    const courierPhone = this.parsePhone(this.order.courier_phone)[0];

    if (this.orderPhones.length == 1) {
      this.selectedPhone = this.orderPhones[0];
    }

    switch (action) {
      case 'init':
        this.callWindow = !this.callWindow;
        break;
      case 'phone':
        this.CL.callNumber(this.selectedPhone, false).then(() => { });
        this.callWindow = false;
        break;
      case 'operator':
        if (this.network.type == 'none') {
          this.phoneClick('phone');
          return false;
        }
        if (this.selectedPhone && courierPhone) {
          const url = 'orders';
          const data = {
            action: 'send_phone',
            client_number: this.selectedPhone,
            cur_number: courierPhone,
          };
          this.auth.sendPost(url, data).subscribe((resp) => {
            console.log('call_subs', resp);
          });
          this.auth.showError(9);
          this.callWindow = false;
        }
        break;
    }
  }

  public initOrder() {
    this.storage.get('orders').then((orders: Array<Order>) => {
      this.order = orders?.filter((order: Order) => order.id.toString() == this.orderId)[0];
      console.log('sys:: данные заказа: ', this.order);
      this.goods = this.order.goods;
      this.address = this.order.client_address;
      this.timeFrom = this.order.datetime_from;
      this.timeTo = this.order.datetime_to;
      this.phone = this.order.client_phone;
      this.status = this.order.status_text;
      this.status_id = Number(this.order.status_id);
      this.client_status = this.order.client_status;
      this.client_status_dt = this.order.client_status_dt;
      this.vlog = this.order.vlog;
      this.poruch = this.order.poruch;
      (this.mass = this.order.mass), (this.amount = this.order.amount);
      this.podrazd = this.order.Podrazd;
      this.coords = [this.order.lt, this.order.lg];
      this.setQuants();
      this.ifPaid();
      this.getPayData();
      this.initClientInfo();
    });
  }

  public getClientState() {
    const states = this.state$.client_states.getValue();
    const state_id = this.order.client_state;

    for (let i = 0; i < states.length; i++) {
      if (states[i].id == state_id) {
        return states[i].state;
      }
    }

    return '';
  }
  // Заполняет массив с ценой товаров и их количеством(для частички)
  public setQuants() {
    const goods = this.order.goods;

    for (let i = 0; i < goods.length; i++) {
      const good = goods[i];
      const code = good.Code;
      const count = good.final_kol_vo ? good.final_kol_vo : good.kol_vo;
      const quant = { amount: good.kol_vo, price: good.Price };
      this.g_quants[code] = quant;
    }
  }

  public changeQuant(code: string, action: string) {
    const q: number = this.g_quants[code].amount;
    let good = null;
    for (let i = 0; i < this.order.goods.length; i++) {
      if (this.order.goods[i].Code == code) {
        good = this.order.goods[i];
      }
    }

    if (action == 'plus') {
      const n_q = q + 1;

      if (n_q > good.kol_vo) {
        return false;
      } else {
        this.g_quants[code].amount = n_q;
      }
    } else if (action == 'minus') {
      const n_q = q - 1;

      if (n_q < 0) {
        return false;
      } else {
        this.g_quants[code].amount = n_q;
      }
    } else if (action == 'delete') {
      this.g_quants[code].amount = 0;
    }
    this.getSum();
  }


  public navBack() {
    localStorage.removeItem('drawImg');
    this.router.navigate(['/courier']);
  }

  public getStatus(): string {
    return this.courier.getStatus(this.order);
  }

  public changeStatus() {
    if (!this.changeWindow) {
      this.changeWindow = true;
    }
  }

  public close_window() {
    this.changeWindow = false;
  }

  public selectStatus(id: number) {
    this.selectedStatus = id;
    if (id == 4 || id == 5) {
      this.setQuants();
      this.getSum();
    }
    if (id == 4) {
      this.drawNeedle = false;
    }
  }


  public sendPayCall(order: Order = this.order, newStatus = this.selectedStatus as number) {
    order.goods = this.changeGoods(order, this.g_quants);
    if (this.network.type == 'none') {
      // Если оффлайн
      this.cache.getItem('syncRequests').then((syncRequests: Array<any>) => {
        order = { ...{ phone_input: this.phone_input }, ...{ email_input: this.email_input }, ...{ quants: this.g_quants }, ...order, ...{ selectedPayment: this.selectedPayment }, ...{ selectedReason: this.selectedReason }, ...{ new_plan_date: this.new_plan_date }, ...{ commentText: this.commentText }, ...{ check: this.checkBase64Image }, ...{ cardNums: this.cardNums }, ...{ goods: this.goods } };
        syncRequests && syncRequests.push({ order, newStatus });
        this.cache.saveItem('syncRequests', syncRequests, 'delayedCalls').then(() => {
          console.log(`sys:: Отложено изменение статуса на ${newStatus} для заказа ${order.client_id}`);
          this.localModifyOrders(newStatus, order.goods);
          this.router.navigate(['courier']);
        });
      });
    } else {
      // Если онлайн

      order = { ...{ phone_input: this.phone_input }, ...{ email_input: this.email_input }, ...{ quants: this.g_quants }, ...order, ...{ selectedPayment: this.selectedPayment }, ...{ selectedReason: this.selectedReason }, ...{ new_plan_date: this.new_plan_date }, ...{ commentText: this.commentText }, ...{ check: this.checkBase64Image }, ...{ cardNums: this.cardNums } };
      this.localModifyOrders(newStatus, order.goods);
      this.orderService.sendDelayedCall(order, newStatus);
      this.router.navigate(['courier']);
    }
  }

  public submitChange() {
    const self = this;
    this.storage.get('orders').then((orders) => {
      orders?.map((order: Order) => {
        if (String(order.id) == String(this.order.id)) {
          order.status_id = this.selectedStatus;
          this.data.saveOrders(orders);
          this.data.orders.next(orders);
        }
      });
    });
    let noSkip = true;
    switch (this.selectedStatus) {
      case 4:
        if (this.selectedReason != null) {
          const new_plan_date = new Date(this.new_plan_date);

          this.courier
            .changeStatus(
              this.selectedStatus,
              String(this.order.id),
              undefined,
              this.selectedReason,
              null,
              null,
              new_plan_date.toLocaleDateString()
            )
            .subscribe((data: any) => {
              if (data.success == 'true') {
                self.changeWindow = false;
                self.state$.state.next('init');
                self.selectedPayment = '1';
                self.selectedReason = null;
                self.selectedStatus = null;
                self.router.navigate(['courier']);
                self.state$.updateWayInfo.next('0');
              }
              localStorage.removeItem('drawImg');
            });
        }
        break;
      case 5:
        if (this.selectedPayment !== '2') {
          noSkip = false;
        }
        this.sys.doOCR(this.checkBase64Image, noSkip).then((recognizedData) => {
          const text = (this.commentText ? this.commentText : '');
          this.courier
            .changeStatus(
              this.selectedStatus,
              String(this.order.id),
              text,
              undefined,
              undefined,
              this.selectedPayment,
              '',
              this.checkBase64Image,
              recognizedData
            )
            .subscribe((data: any) => {
              if (data.success == 'true') {
                self.changeWindow = false;
                self.state$.state.next('init');
                self.selectedPayment = '1';
                self.selectedReason = null;
                self.selectedStatus = null;
                if (!self.pay_access) {
                  self.router.navigate(['courier']);
                }
                self.initOrder();
                self.state$.updateWayInfo.next('0');
              }
              localStorage.removeItem('drawImg');
            });
        });
        break;
      case 6:

        if (this.selectedPayment !== '2') {
          noSkip = false;
        }
        this.sys.doOCR(this.checkBase64Image, noSkip).then((recognizedData) => {
          this.courier
            .changeStatus(
              this.selectedStatus,
              String(this.order.id),
              undefined,
              undefined,
              this.g_quants,
              this.selectedPayment,
              '',
              this.checkBase64Image,
              recognizedData
            )
            .subscribe((data: any | null) => {
              if (data?.success == 'true') {
                self.changeWindow = false;
                self.state$.state.next('init');
                self.selectedPayment = '1';
                self.selectedReason = null;
                self.selectedStatus = null;
                if (!self.pay_access) {
                  self.router.navigate(['courier']);
                }
                self.initOrder();
                self.state$.updateWayInfo.next('0');
              } else {
                this.sys.presentToast(
                  'Нет товаров в заказе',
                  'danger',
                  'Частичная доставка невозможна'
                );
              }
              localStorage.removeItem('drawImg');
            });
        });
        break;
    }
  }

  public getSum() {
    if (this.order) {
      let price = 0;
      const quants = this.g_quants;
      for (const code in quants) {
        price += quants[code].price * quants[code].amount;
      }

      this.order.rur = price;
    }
  }

  // подсчитывает сумму заказа
  public getPrice(order: Order) {
    if (order) {
      let price = 0;
      for (let i = 0; i < order.goods.length; i++) {
        const good = order.goods[i];
        price += Number(good.Price) * Number(good.kol_vo);
      }
      return price;
    }
  }

  public selectPayment(item: string) {
    this.selectedPayment = item;
  }

  public sendPay() {
    const goods = this.order.goods;
    const quants = this.g_quants;
    const callback_url =
      `${this.sys.proxy}https://mobile.postsrvs.ru/mobile/pay_callback.php`;
    const products = [];

    for (const code in quants) {
      if (quants[code].amount > 0) {
        for (let i = 0; i < goods.length; i++) {
          if (goods[i].Code == code) {
            const good_name = goods[i].Name;
            const good_amount = quants[code].amount;
            const good_price = Math.round(quants[code].price * 100) / 100;
            const pos = {
              name: good_name,
              price: good_price,
              quantity: good_amount,
            };
            products.push(pos);
          }
        }
      }
    }

    const purchase = { products };
    console.log('goods_description\n', purchase);
    const self = this;

    if (this.pay_access) {

      const order_data = {
        apikey: String(this.pay_access_data.api_key),
        login: String(this.pay_access_data.phone),
        cashier_name:
          String(this.pay_access_data.name) +
          String(this.pay_access_data.phone),
        purchase,
        callback_url,
        mode: 'email',
        customer_email: this.email_input,
        customer_phone: this.phone_input,
        card_amount: '',
        cash_amount: ''
      };
      if (self.selectedPayment == '2') {
        order_data.card_amount = '#';
      } else {
        order_data.cash_amount = '#';
      }

      if (this.phone_input != '') {
        order_data.customer_phone = this.phone_input;
      }

      self.send_api_data(order_data);
    }
  }

  // Получаем api key & login
  public getPayData() {

    const url = 'pay_order';
    const data = { action: 'getData', orderId: this.clientId };
    const self = this;
    if (navigator.onLine) {
      this.auth.sendPost(url, data).subscribe((res: any) => {
        console.log('GET_PAY_DATA', res);
        if (res.success == 'true') {
          self.pay_access = true;
          self.pay_access_data = res;
        } else {
          self.pay_access = false;
        }
      });
    } else {
      self.pay_access = false;
    }
  }

  public send_api_data(api_data: any) {
    const url = 'pay_order';
    const self = this;
    this.order.rur = 0;

    api_data.purchase.products.forEach((product: any) => {
      this.order.rur += product.price * product.quantity;
    });

    const data = {
      action: 'sendPay',
      orderData: api_data,
      orderId: this.order.id,
    };
    if (navigator.onLine) {
      this.auth.sendPost(url, data).subscribe((res: any) => {
        self.submitChange();
        self.checkPayment();
        self.hide_status = true;
      });
    } else {
      let requests: any[] = [];
      this.cache.getItem('requests').then((req) => {
        if (req !== undefined) {
          requests = req;
        }
        requests.push({ url, data });
        this.cache.saveItem('requests', requests);

        self.submitChange();
        self.checkPayment();
        self.hide_status = true;
      });

    }
  }


  public checkPayment() {
    const self = this;
    this.state$.interval_1ss.pipe(takeUntil(this.$codeStop)).subscribe(() => {
      self.ifPaid();
      console.log('paid_iter');
    });
  }

  public ifPaid() {
    const url = 'pay_order';
    const data = { action: 'checkPaid', orderId: this.order.id };
    const self = this;

    this.auth.sendPost(url, data).subscribe((data) => {
      if (data.success == 'true' && data.barcode != null) {
        self.barcode_flag = true;
        self.barcode_url = data.barcode_url;
        self.barcode = data.barcode;
        self.$codeStop.next(null);
        self.hide_status = true;
      }
    });
  }

  public enterPhone() {
    if (this.showPhone) {
      this.showPhone = false;
      this.show_email = false;
    } else {
      this.showPhone = true;
      this.show_email = true;
    }
  }



  public initClientInfo() {
    const mail_exp = /(?:([\s.,]{1}))([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/gm;
    const infoStr = this.phone;
    const mail = mail_exp.exec(infoStr);

    if (mail != null) {
      this.email_input = mail[0];
    } else {
      this.show_email = true;
    }
  }

  public intentStart() {
    this.state$.intentStart(this.coords);
  }

  public showRoute(order: Order) {
    this.sysMap.showRoute(order);

  }

  public doneOrder() {
    const drawedImg = localStorage.drawImg;
    if (this.drawNeedle && !drawedImg) {
      this.drawBtn(this.drawNeedle);
    } else {
      if (this.selectedPayment == '2') {
        this.sendPayCall();
        this.sys.checkPhoto().then((imageData) => {
          this.checkBase64Image = `data:image/jpeg;base64,${imageData}`;
          const url = `${this.sys.proxy}https://mobile.postsrvs.ru/mobile/orders`;
          const data = {
            action: 'save_check_data',
            order_id: this.orderId,
            check_photo: this.checkBase64Image,
          };
          this.http.post(url, data);
        });
      } else {
        this.sendPayCall();
      }

    }
  }

  public saveNote() {
    localStorage.setItem(this.orderId, this.note);
    this.sysMap.infoUpdated.next(null);
  }

  public tapBlock() {
    this.openCompany = !this.openCompany;
  }

  public localModifyOrders(newStatus: number, goods: any[]) {
    const meta: Meta = {
      label: 'localChanges'
    };
    this.storage.get('orders').then((orders) => {
      orders?.map((order: Order) => {
        if (order.id.toString() == this.order.id.toString()) {
          order.status_id = newStatus;
          order.goods = goods;
          this.data.saveOrders(orders).then(() => this.sysMap.infoUpdated.next(meta));
          this.data.orders.next(orders);
        }
      });
    });
  }



  async presentNotDeliveredModal() {
    const modal = await this.modalController.create({
      component: NotDeliveredComponent,
      cssClass: 'done-order-modal',
      componentProps: {
        reasons: this.reasons
      },
      showBackdrop: true
    });
    await modal.present();
    const details = await modal.onDidDismiss();
    console.log('sys:: dismiss details: ', details);
    this.selectedReason = details.data.selectedReason;
    this.commentText = details.data.commentText;
    this.new_plan_date = details.data.new_plan_date;
    details.data && this.doneOrder();
  }

  async presentDeliveredModal() {
    const modal = await this.modalController.create({
      component: DeliveredComponent,
      cssClass: 'done-order-modal',
      componentProps: {
        goods: this.goods,
        pay_type: this.order.pay_type,
        pay_type_change_allowed: this.order.pay_type_change_allowed
      },
      showBackdrop: true
    });
    await modal.present();
    const details = await modal.onDidDismiss();
    console.log('sys:: dismiss details: ', details);
    this.drawNeedle = details.data.drawNeedle;
    this.selectedPayment = details.data.selectedPayment;
    this.email_input = details.data.email_input;
    this.phone_input = details.data.phone_input;
    this.commentText = details.data.commentText;
    this.cardNums = details.data.cardNums;

    if (details.data) {
      this.doneOrder();
    }

  }

  public async presentPartDeliveredModal(orderId = this.order.id) {
    const modal = await this.modalController.create({
      component: PartDeliveredComponent,
      cssClass: 'done-order-modal',
      componentProps: {
        goods: this.goods,
        pay_type: this.order.pay_type,
        pay_type_change_allowed: this.order.pay_type_change_allowed,
        orderId
      },
      showBackdrop: true
    });
    await modal.present();
    const details = await modal.onDidDismiss();
    console.log('sys:: dismiss details: ', details);
    this.drawNeedle = details.data.drawNeedle;
    this.selectedPayment = details.data.selectedPayment;
    this.email_input = details.data.email_input;
    this.phone_input = details.data.phone_input;
    this.commentText = details.data.commentText;
    this.cardNums = details.data.cardNums;

    if (details.data) {
      this.doneOrder();
    }
  }

  //Изменение товаров на основе мифических quants
  //Возвращает goods
  public changeGoods(order: Order, quants: any) {
    order.goods.forEach((good: any) => {
      good.kol_vo = quants[good.Code].amount;
    });
    return order.goods;
  }


}
