import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    public data: any;
    name: string = '';
    email: string = '';
    id: number = 0;
    telephone: string = '';
    public searchString: string;
    constructor(private ref: DataService) {

    }
    ngOnInit() {
        this.ref.getCustomers().subscribe(
            res => this.data = res
        );
    }
    openAddDialog(type, currentData) {
        if (type === 'add') {
            this.name = this.email = this.telephone = "";
        } else if (type === 'edit') {
            this.id = currentData.id;
            this.name = currentData.name;
            this.email = currentData.email;
            this.telephone = currentData.tel;
        }
    }
    addUser() {
        if (this.name && this.email && this.telephone) {
            if (!this.id) {
                let obj = {};
                obj['id'] = this.data.length + 1;
                obj['name'] = this.name;
                obj['email'] = this.email;
                obj['tel'] = this.telephone;
                this.ref.postCustomers(obj).subscribe(
                );
            }
            else {
                let obj = {};
                obj['name'] = this.name;
                obj['email'] = this.email;
                obj['tel'] = this.telephone;
                this.ref.editCustomers(this.id, obj).subscribe(
                );
            }
        }

    }
    onEdit(type, user) {
        this.openAddDialog(type, user);
    }
    onDelete(user, index) {
        if (this.data) {
            this.data.splice(index, 1);
            this.ref.deleteCustomers(user.id).subscribe();
        }
    }

}
