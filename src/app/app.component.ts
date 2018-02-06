import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { TestService } from './test.service';
import { SampleService } from 'sturgeon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  profile: any;
  environment: string;

  constructor(private testService: SampleService) {
    this.title = testService.sayHello();
    console.log(this.testService);
    this.testService.getUser().subscribe(response => this.profile = response && console.log(response));
  }

  showConfig() {
    this.testService.getConfig()
      .subscribe(data => this.environment = data['environment']);
  }

  ngOnInit() {
    this.showConfig();
  }
}
