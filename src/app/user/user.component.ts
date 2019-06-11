import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DataServiceService } from '../shared/data-service.service';
// import { CommonService } from '../shared/common.service';
import { HttpClient } from '@angular/common/http';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dataSource: any;
  currentDate: Date = new Date(2015, 4, 25);
  priorityData:any =[];
  typeData:any =[];
  calenderList:any =[];


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.fnCalendarList
  }

  views: any = ['day', {
    type: 'week',
    groups: ['typeId'],
    dateCellTemplate: 'dateCellTemplate'
}, {
    type: 'workWeek',
    startDayHour: 9,
    endDayHour: 18,
    groups: ['priorityId'],
    dateCellTemplate: 'dateCellTemplate'
}, 'month'];


fnCalendarList() {
    const dates = {
      "UserID":1,
    "SDate":"2018-01-01",
    "EDate":"2019-02-01"
    };

    // this.spinnerService.show();
    this.common.fnPostAPI('/Candidate/CalendarListByID', dates)
      .subscribe((data: any) => {
        // this.spinnerService.hide();
        if (data && data.status && data.code) {
          this.calenderList = data.resObject;
          console.log("calenderList is",this.calenderList)
        }
        else{
          this.calenderList = [];
        }
      });
}
}
