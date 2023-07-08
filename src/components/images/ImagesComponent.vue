<template>
  <div class="images-container flex">
    <div class="image-item flex">
      <a
        href="https://br.freepik.com/vetores-gratis/maquete-de-tweet-de-design-plano_21251618.htm#query=coment%C3%A1rios&position=4&from_view=search&track=sph"
        target="blank"
      >
        <q-img src="../../assets/comments.jpg" width="500px" />
      </a>
    </div>
    <div class="image-item flex">
      <a
        href="https://br.freepik.com/psd-gratuitas/modelo-de-postagem-do-instagram-de-midia-social_6353554.htm#query=posts&position=11&from_view=search&track=sph"
        target="blank"
      >
        <q-img src="../../assets/posts.jpg" width="500px" />
      </a>
    </div>
    <div class="image-item flex">
      <a
        href="https://br.freepik.com/vetores-gratis/colecao-de-icones-de-pessoas_1157380.htm#query=users&position=0&from_view=search&track=sph"
        target="blank"
      >
        <q-img src="../../assets/users.jpg" width="500px" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.images-container {
  margin-top: 20px;
  gap: 10px;
  justify-content: center;
}

.image-item {
  .image {
    width: 500px;
  }
  img {
    border-radius: 5px;
  }
}
</style>
