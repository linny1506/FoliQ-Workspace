import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairTextureComponent } from './hair-texture.component';

describe('HairTextureComponent', () => {
  let component: HairTextureComponent;
  let fixture: ComponentFixture<HairTextureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairTextureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HairTextureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
