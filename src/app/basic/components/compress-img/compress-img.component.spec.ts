import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CompressImgComponent} from './compress-img.component';

describe('CompressImgComponent', () => {
    let component: CompressImgComponent;
    let fixture: ComponentFixture<CompressImgComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompressImgComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompressImgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
