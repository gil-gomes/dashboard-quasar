<template>
  <div class="cards flex row">
    <div class="comments card col-5 col-sm-5">
      <div class="icon icon-comments flex items-center">
        <q-icon name="comment" color="white" size="30px"></q-icon>
      </div>
      <div class="flex column data">
        <span class="text-bold">{{ comments?.total }}</span>
        <span>{{ t('COMMENTS') }}</span>
      </div>
    </div>

    <div class="users card card col-5 col-sm-5">
      <div class="icon icon-users flex items-center">
        <q-icon name="group" color="white" size="30px"></q-icon>
      </div>
      <div class="flex column data">
        <span class="text-bold">{{ users?.total }}</span>
        <span>{{ t('USERS') }}</span>
      </div>
    </div>

    <div class="posts card col-5 col-sm-5">
      <div class="icon icon-posts flex items-center">
        <q-icon name="feed" color="white" size="30px"></q-icon>
      </div>
      <div class="flex column data">
        <span class="text-bold">{{ posts?.total }}</span>
        <span>Posts</span>
      </div>
    </div>

    <div class="products card col-5 col-sm-5">
      <div class="icon icon-products flex items-center">
        <q-icon name="inventory_2" color="white" size="30px"></q-icon>
      </div>
      <div class="flex column data">
        <span class="text-bold">{{ products?.total }}</span>
        <span>{{ t('PRODUCTS') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onMounted, ref } from 'vue';
import { cardsService } from './cards.service';
import { useI18n } from 'vue-i18n';
import { useCommentsStore } from 'src/stores/comments-store';
import { usePotsStore } from 'src/stores/posts-store';
import { useProductsStore } from 'src/stores/products-store';
import { useUsersStore } from 'src/stores/users-store';

const $q = useQuasar();
const { t } = useI18n();
const comments = ref();
const posts = ref();
const users = ref();
const products = ref();

const commentsStore = useCommentsStore();
const postsStore = usePotsStore();
const productsStore = useProductsStore();
const usersStore = useUsersStore();

const getComments = () => {
  $q.loading.show();
  cardsService
    .getComments()
    .then((data) => {
      comments.value = data;
      commentsStore.setData(data);
      $q.notify({
        type: 'positive',
        message: t('INFORMATION_UPLOADED_SUCCESSFULLY'),
      });
    })
    .catch(() => {
      $q.notify({
        type: 'negative',
        message: t('COULD_NOT_LOAD_COMMENT_INFORMATION'),
      });
    })
    .finally(() => $q.loading.hide());
};

const getPosts = () => {
  $q.loading.show();
  cardsService
    .getPosts()
    .then((data) => {
      posts.value = data;
      postsStore.setData(data);
    })
    .catch(() => {
      $q.notify({
        type: 'negative',
        message: t('COULD_NOT_LOAD_POST_INFORMATION'),
      });
    })
    .finally(() => $q.loading.hide());
};

const getUsers = () => {
  $q.loading.show();
  cardsService
    .getUsers()
    .then((data) => {
      users.value = data;
      usersStore.setData(data);
    })
    .catch(() => {
      $q.notify({
        type: 'negative',
        message: t('COULD_NOT_LOAD_USER_INFORMATION'),
      });
    })
    .finally(() => $q.loading.hide());
};

const getProducts = () => {
  $q.loading.show();
  cardsService
    .getProducts()
    .then((data) => {
      products.value = data;
      productsStore.setData(data);
    })
    .catch(() => {
      $q.notify({
        type: 'negative',
        message: t('COULD_NOT_LOAD_PRODUCT_INFORMATION'),
      });
    })
    .finally(() => $q.loading.hide());
};

const init = () => {
  getComments();
  getPosts();
  getUsers();
  getProducts();
};

onMounted(() => {
  init();
});
</script>

<style lang="scss">
.cards {
  width: 100%;
  min-height: 150px;
  gap: 10px;

  .card {
    max-height: 90px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 24%;
  }
}

.icon {
  height: 100%;
  padding: 0 20px;
  justify-content: center;
  width: 25%;
}

.data {
  padding-left: 10px;
  color: #fff;
}

.comments {
  background-color: $purple-5;

  .icon-comments {
    background-color: $purple;
  }
}

.posts {
  background-color: $primary;
  .icon-posts {
    background-color: $blue-9;
  }
}

.users {
  background-color: $secondary;

  .icon-users {
    background-color: $teal-6;
  }
}

.products {
  background-color: $warning;

  .icon-products {
    background-color: $amber-7;
  }
}

@media (max-width: 800px) {
  .cards {
    justify-content: center;
    .card {
      width: 49%;
    }
  }
}

@media (max-width: 480px) {
  .cards {
    justify-content: center;
    .card {
      width: 90%;
    }
  }
}
</style>
