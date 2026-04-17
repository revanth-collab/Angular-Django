import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-prompt-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prompt-detail.html',
})
export class PromptDetailComponent {

  prompt: any;

  constructor(
    private route: ActivatedRoute,
    private service: PromptService,
    private cdr: ChangeDetectorRef   // IMPORTANT
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    console.log('ID:', id);  // debug

    this.service.getPrompt(id).subscribe({
      next: (res: any) => {
        console.log('DETAIL API:', res); // debug
        this.prompt = res;

        this.cdr.detectChanges(); // force update
      },
      error: (err) => {
        console.error('DETAIL ERROR:', err);
      }
    });
  }
}