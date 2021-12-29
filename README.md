# blog-api
 **blog api database**
 
 **Blog:**
 - **title**: string
 - **body**: string
 - **postTime**: date
 - **tags**: array
 - **authorId**: User

 **Comments:**
   - **text**: string
   -   **postTime**: date
   - **author** : / Reference to users
   - **blogId**: // Reference to blogs
   
  **User:**
   -  **username**: string
   -  **email**: date
   - **photo** : / Reference to users
   - **skills** : array  // added next time







[example of database shema](https://www.mongodb.com/community/forums/t/what-is-the-best-schema-for-a-blog-post-for-storing-the-blog-content-like-share-and-comment/131915/2)
