// custom-paginator.service.ts
import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();


  customPaginatorIntl.nextPageLabel = 'Page suivante';
  customPaginatorIntl.previousPageLabel = 'Page précédente';


  customPaginatorIntl.itemsPerPageLabel = 'Logement par page:';


  customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 sur ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} sur ${length}`;
  };

  return customPaginatorIntl;
}
