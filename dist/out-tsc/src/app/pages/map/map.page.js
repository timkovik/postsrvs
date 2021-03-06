import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subject } from 'rxjs';
import { MapService } from '../../services/map.service';
import { StateService } from '../../services/state.service';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SysService } from '../../services/sys.service';
let MapPage = class MapPage {
    constructor(route, geo, state$, map_s, wi, auth, sys) {
        this.route = route;
        this.geo = geo;
        this.state$ = state$;
        this.map_s = map_s;
        this.wi = wi;
        this.auth = auth;
        this.sys = sys;
        // public route:any;
        this.loader = false;
        this.dislink = this.state$.disLink;
        this.local_stop$ = new Subject();
        var self = this;
        this.map_s.buildMap();
        console.log('sys::buildMap');
        this.state$.map_state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
            if (state == 'map_init') {
                self.map_s.buildWay();
            }
        });
        this.state$.route_state.pipe(takeUntil(this.local_stop$)).subscribe((state) => {
            if (state == 'init_done') {
                console.log('map_page_route_init');
                self.initLink();
            }
        });
        this.state$.interval_1m.pipe(takeUntil(this.local_stop$)).subscribe(() => {
            console.log('sys:: Перерисовка маршрута');
            self.map_s.changeWay();
            self.initLink();
            self.dislink = self.state$.disLink;
        });
        this.state$.route_state.pipe(takeUntil(this.state$.$stop)).subscribe((state) => {
            if (state == 'init_done') {
                self.initLink();
            }
        });
    }
    intentStart() {
        const options = {
            action: this.wi.ACTION_VIEW,
            url: this.state$.link,
            package: 'ru.yandex.yandexnavi'
        };
        this.wi.startActivity(options).then((data) => {
        });
    }
    initLink() {
        var self = this;
        if (!this.state$.link_init) {
            this.state$.linkPoints.subscribe((points) => {
                if (points != 'not_init' || points.length < 2) {
                    self.state$.disLink = false;
                    let link = "yandexnavi://build_route_on_map?";
                    let l_body = "";
                    let l_head = "";
                    for (let i = 0; i < points.length; i++) {
                        if (i != points.length - 1) {
                            l_body = l_body + "&lat_via_" + i + "=" + points[i][0] + "&lon_via_" + i + "=" + points[i][1];
                        }
                        else {
                            l_head = "lat_to=" + points[i][0] + "&lon_to=" + points[i][1];
                        }
                    }
                    link += l_head + l_body;
                    self.state$.link = link + '&client=241';
                }
                else {
                    self.state$.disLink = true;
                }
            });
            this.state$.link_init = true;
        }
    }
    ngOnDestroy() {
        this.local_stop$.next();
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            if (this.map_s.oneOrder) {
                this.map_s.showOrder(this.state$.coords);
            }
            if (params.get('order')) {
                console.log('sys:: координаты', this.state$.coords);
                console.log('sys:: параметры url ', params.get('order'));
                this.map_s.oneOrder = true;
            }
        });
        if (this.state$.map_state.getValue() == 'map_init' && this.auth.getDefaultRouteBuilding() !== '1' && !this.map_s.oneOrder) {
            this.map_s.pointsRender();
        }
        this.state$.map_state.subscribe((state) => {
            if ((state == 'map_init') && (this.auth.getDefaultRouteBuilding() !== '1') && !this.map_s.oneOrder) {
                this.map_s.pointsRender();
            }
        });
        this.state$.way.subscribe((orders) => {
            this.map_s.initPoints();
        });
    }
    allOrders() {
        console.log('sys::allOrders()');
        this.map_s.oneOrder = false;
        this.map_s.buildWay();
    }
    ngAfterViewInit() {
        this.state$.interval_1ss.pipe(takeUntil(this.local_stop$)).subscribe(() => {
            let orderId = localStorage.getItem('needOrder');
            if (orderId) {
                this.map_s.orderDetails(orderId);
            }
        });
    }
};
MapPage = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.page.html',
        styleUrls: ['./map.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Geolocation,
        StateService,
        MapService,
        WebIntent,
        AuthService,
        SysService])
], MapPage);
export { MapPage };
//# sourceMappingURL=map.page.js.map