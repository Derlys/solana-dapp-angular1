import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cluster } from './cluster-data-access.component';

@Component({
  selector: 'dapp-cluster-ui',
  standalone: true,
  imports: [CommonModule],
  template: `<p>cluster-ui works!</p>`,
})
export class ClusterUiComponent {}

@Component({
  selector: 'dapp-cluster-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-x-auto">
      <table class="table border-4 border-separate border-base-300">
        <thead>
          <tr>
            <th>Name / Network / Endpoint</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for(cluster of clusters; track cluster){
          <tr class="bg-base-200">
            <td class="space-y-2">
              <div class="whitespace-nowrap space-x-2">
                <span class="text-xl">
                  <button class="link link-secondary">
                    {{ cluster.name }}
                  </button>
                </span>
              </div>
              <span class="text-xs">Network: {{ cluster.network }} </span>
              <div class="whitespace-nowrap text-gray-500 text-xs">
                {{ cluster.endpoint }}
              </div>
            </td>
            <td class="space-x-2 whitespace-nowrap text-center">
              <button class="btn btn-xs btn-default btn-outline">
                <i class="fas fa-trash" size="16"></i>
              </button>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class ClusterUiTableComponent {
  @Input() clusters: Cluster[] = [];
}
