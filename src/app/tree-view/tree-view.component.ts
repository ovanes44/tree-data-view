import { Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TreeNode {
  id: number;
  title: string;
  isDeleted: boolean;
  children: TreeNode[];
}

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'tree-view.component.html',
  styleUrl: 'tree-view.component.scss',
})
export class TreeViewComponent {
  readonly node = input.required<TreeNode>();
  protected readonly isExpanded = signal(false);

  protected readonly hasChildren = computed(() => {
    return this.node().children && this.node().children.length > 0;
  });

  protected toggleNode(): void {
    if (this.hasChildren()) {
      this.isExpanded.update((value) => !value);
    }
  }
}
