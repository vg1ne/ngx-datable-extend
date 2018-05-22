import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDecoratorComponent } from './table-decorator.component';

describe('TableDecoratorComponent', () => {
  let component: TableDecoratorComponent;
  let fixture: ComponentFixture<TableDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
