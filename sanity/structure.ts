// Define StructureResolver locally if not exported correctly
type StructureResolver = (S: any) => any;

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('author').title('Authors'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: any) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
