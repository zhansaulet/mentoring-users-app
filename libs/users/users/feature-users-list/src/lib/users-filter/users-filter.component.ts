import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { filter, Subscription } from 'rxjs';
import { UsersFacade } from '@users/users/data-access';

@Component({
  selector: 'users-filter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.scss'],
})
export class UsersFilterComponent {
  public filterFormControl = new FormControl('');
  private usersFacade = inject(UsersFacade);

  ngOnInit(): void {
    this.filterFormControl.valueChanges.pipe(filter((value): value is string => value !== null)).subscribe((value) => {
      return this.usersFacade.filterUsers(value);
    });
  }
}
