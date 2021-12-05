import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ModalRegisterComponent } from '../components/modal-register/modal-register.component';

export type TypeBanner = 'register' | 'reject'| 'notFound';
@Injectable({
  providedIn: 'root'
})
export class ModalManager {
  private bodyComponents: any = {
    register: ModalRegisterComponent
  };

  private modalConfig: MatDialogConfig = {
    width: '350px',
    data: {
      reset: true,
    },
  };
  constructor(private dialog: MatDialog) { }

  show<T>(type: TypeBanner, data?: MatDialogConfig) {
      return this.dialog.open(this.bodyComponents[type], { ...this.modalConfig, disableClose: true, ...data });
  }

  closeAll() {
    this.dialog.closeAll();
  }
}
