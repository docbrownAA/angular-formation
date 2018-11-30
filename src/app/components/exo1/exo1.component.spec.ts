import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Exo1Component} from './exo1.component';
import {FormsModule} from '@angular/forms';
import {toBase64String} from '@angular/compiler/src/output/source_map';

describe('Exo1Component', () => {
  let component: Exo1Component;
  let fixture: ComponentFixture<Exo1Component>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [Exo1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test title', () => {
    expect(compiled.querySelector('h3').textContent).toContain('Tâches');


  });

  it('count button', () => {
    component.tasks = ['task1', 'task2', 'task3'];
    fixture.detectChanges();
    const buttonTask = compiled.querySelectorAll('div.list-group>button');
    expect(buttonTask.length).toBe(3);


  });
});
