import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateDetailComponent} from './create-detail.component';

describe('CreateDetailComponent', () => {
    let component: CreateDetailComponent;
    let fixture: ComponentFixture<CreateDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
