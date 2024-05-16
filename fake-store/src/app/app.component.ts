import { Component, OnInit } from '@angular/core';
import { FakestoreService } from './servicos/fakestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{
  
  constructor(private fakestore: FakestoreService){}

  produtos!: any

  ngOnInit(): void {
    this.fakestore.getAllProducts()
    .subscribe({
      next: (dado: any)=>{
        console.log(dado)
        this.produtos = dado
      },
      error: (erro: any)=>{
        console.log(erro)
      }
    })
  }

}
