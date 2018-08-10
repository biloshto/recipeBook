// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
// import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        // (response: Response) => {
        //   console.log(response);
        // }
        // (response: HttpEvent<Object>) => {
        (response) => {
          console.log(response);
        }
      );
      // we want to handle the response in the component and not in the service because theoretically maybe we want to show some error alert in case some error happend, or anything like that
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
    // here we don't need to subscribe because we're already doing this in the data-storage.service
  }

  onLogout() {
    this.authService.logout();
  }

}
