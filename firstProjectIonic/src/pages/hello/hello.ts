import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Product } from '../../model/product.model';
import { ToastProvider } from '../../providers/toast/toast';

/**
 * Generated class for the HelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage implements OnInit {
  id;
  product: Product = {id: null, name: null};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpServiceProvider,
    private toastService: ToastProvider
    ) {
    // let id = this.navParams.get('id');
    this.id = this.navParams.get('productId');
  }

  ngOnInit() {
    this.httpService.getById(`products/${this.id}`).subscribe(data => this.product = data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloPage');
  }

  updateProduct() {
    this.httpService.put(`products/${this.product.id}`, this.product)
                    .subscribe(data => {
                      this.toastService.createToast('Produto atualizado com sucesso');
                      this.navCtrl.setRoot(HomePage);
                    });
  }

  deleteProduct() {
    this.httpService.delete(`products/${this.product.id}`).subscribe(data => {
      this.toastService.createToast('Produto atualizado com sucesso');
      this.navCtrl.setRoot(HomePage);
    });
  }
}
