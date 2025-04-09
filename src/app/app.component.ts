import { Component, signal } from '@angular/core';
import { TreeNode, TreeViewComponent } from './tree-view/tree-view.component';

const TREEDATA = [
  {
    id: 1,
    title: 'Значение 1',
    isDeleted: false,
    children: [
      {
        id: 2,
        title: 'Значение 1.1',
        isDeleted: false,
        children: [
          {
            id: 3,
            title: 'Значение 1.1.1',
            isDeleted: true,
            children: [],
          },
        ],
      },
      {
        id: 4,
        title: 'Значение 1.2',
        isDeleted: false,
        children: [
          {
            id: 5,
            title: 'Значение 1.2.1',
            isDeleted: false,
            children: [],
          },
          {
            id: 6,
            title: 'Значение 1.2.2',
            isDeleted: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Значение 2',
    isDeleted: false,
    children: [
      {
        id: 8,
        title: 'Значение 2.1',
        isDeleted: true,
        children: [
          {
            id: 9,
            title: 'Значение 2.1.1',
            isDeleted: true,
            children: [
              {
                id: 10,
                title: 'Значение 2.1.1.1',
                isDeleted: false,
                children: [
                  {
                    id: 11,
                    title: 'Значение 2.1.1.1.1',
                    isDeleted: true,
                    children: [
                      {
                        id: 12,
                        title: 'Значение 2.1.1.1.1.1',
                        isDeleted: false,
                        children: [
                          {
                            id: 13,
                            title: 'Значение 2.1.1.1.1.1.1',
                            isDeleted: false,
                            children: [],
                          },
                        ],
                      },
                      {
                        id: 13,
                        title: 'Значение 2.1.1.1.1.2',
                        isDeleted: false,
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TreeViewComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  protected readonly treeData = signal<TreeNode[]>(TREEDATA);
}
