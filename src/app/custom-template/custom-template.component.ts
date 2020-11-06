import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-template',
  templateUrl: './custom-template.component.html',
  styleUrls: ['./custom-template.component.css']
})
export class CustomTemplateComponent implements OnInit {

  @Input() field: any;
  @Input() text: any;

  constructor() { }
  
  ngOnInit(): void {
  }

  onChange(value, type) {
    try {
      let form = localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form')) : '';
      
      if (form) {
        let templates = form['config']['nav_tabs']

        templates.filter(template => {
          template.field_groups.filter(groups => {
            groups.fields.map(field => {
              if (field.type == type) {
                field.value = value;
              }
              return field;
            })
          })

        })

        form['config']['nav_tabs'] = templates;

        localStorage.setItem('form', JSON.stringify(form));
      }

    } catch (error) {
      console.log(error)
    }


  }

}
