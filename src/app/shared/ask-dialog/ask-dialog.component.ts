import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ask-dialog',
  templateUrl: './ask-dialog.component.html',
  styleUrls: ['./ask-dialog.component.scss'],
})
export class AskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {}
  ngOnInit(): void {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
