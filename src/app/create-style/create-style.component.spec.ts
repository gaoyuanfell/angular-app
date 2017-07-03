import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateStyleComponent} from './create-style.component';

describe('CreateStyleComponent', () => {
    let component: CreateStyleComponent;
    let fixture: ComponentFixture<CreateStyleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateStyleComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateStyleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
