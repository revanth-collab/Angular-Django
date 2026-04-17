import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-prompt-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './prompt-list.html',
})
export class PromptListComponent {

  prompts: any[] = [];

  constructor(
    private service: PromptService,
    private cdr: ChangeDetectorRef   // ✅ ADD THIS
  ) { }

  ngOnInit() {
    this.service.getPrompts().subscribe({
      next: (res: any) => {
        console.log('API Response:', res);
        this.prompts = res;

        this.cdr.detectChanges();   // 🔥 FORCE UI UPDATE
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  }
}