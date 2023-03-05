<script setup lang="ts">
type Post = {
  post: {
    data: {
      id:string,
      attributes: {
        Title: string,
        Description: string,
      }[]
    }
  }
}

const route = useRoute()

const query = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      data{
        id
        attributes {
          Title
          Description
          Article
        }
      }
    }
  }
`

const { data, error } = await useAsyncQuery<Post>(query, {
  id: route.params.id
})
</script>

<template>
  <div>
    <NuxtLink to="/" class="ml-3">Back</NuxtLink>

    <PostCard
      :data="data.post.data"
      :id="data.post.data.id"
      :attributes="data.post.data.attributes"
      :Title="data.post.data.attributes.Title"
      :Description="data.post.data.attributes.Description"
    />
  </div>
</template>