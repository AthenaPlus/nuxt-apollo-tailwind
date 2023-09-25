<template>
  <div class="flex flex-wrap">
    <PostCards v-for="{ id, attributes } in data.posts.data" :key="id" :data="data" :id="id"
      :attributes="attributes" :Title="attributes.Title" :Description="attributes.Description"   class="w-[350px]" />
  </div>
</template>
<script lang="ts" setup>
type PostsData = {
  posts: {
    data: {
      id: string,
      attributes: {
        Title: string,
        Description: string,
        }
    }[]
  }
}

const query = gql`
  query getPosts {
    posts{
  data{
    id
    attributes{
      Title
      Description
      category {
          data {
            id
            attributes {
                Title
            }
          }
        }
      }
    }
  }
  }
  `
const { data } = await useAsyncQuery<PostsData>(query)
</script>