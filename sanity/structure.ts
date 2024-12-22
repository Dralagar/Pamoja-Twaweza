import type {StructureResolver, ListItemBuilder} from 'sanity/desk'

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
        (item: InstanceType<typeof ListItemBuilder>) => {
          const id = item.getId();
          return id && !['post', 'category', 'author'].includes(id);
        },
      ),
    ])
