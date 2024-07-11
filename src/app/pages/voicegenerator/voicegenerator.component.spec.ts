import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicegeneratorComponent } from './voicegenerator.component';

describe('VoicegeneratorComponent', () => {
  let component: VoicegeneratorComponent;
  let fixture: ComponentFixture<VoicegeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoicegeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoicegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
