import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PromptService } from '../services/prompt.service';

@Component({
  selector: 'app-add-prompt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-prompt.html',
})
export class AddPromptComponent {

  form: any;

  toastMessage: string = '';
  showToast: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private service: PromptService, private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      complexity: [1, [Validators.min(1), Validators.max(10)]]
    });
  }

  submit() {

    if (this.form.invalid) return;

    this.loading = true;

    this.service.createPrompt(this.form.value).subscribe({
      next: () => {
        this.loading = false;

        this.form.reset({
          title: '',
          content: '',
          complexity: 1
        });

        this.toastMessage = 'Prompt created successfully!';
        this.showToast = true;
        this.cdr.detectChanges();

        setTimeout(() => {
          this.showToast = false;
          this.cdr.detectChanges();
        }, 3000);
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}