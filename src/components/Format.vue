<template>
  <div class="format">
    <h1>英語論文をGoogle翻訳にかけやすくするやつ</h1>
    <p>左側に入力したテキストの改行を削除して、"."で改行処理を行います。</p>
    <div>
      <textarea v-bind:value="text" v-on:focus="selectAll" v-on:input="updateText($event.target.value)" placeholder="Input lines"></textarea>
      <textarea ref='output' v-on:focus="selectAll" placeholder="Output lines"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'format',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    updateText(text) {
      this.text = text;
      const formattedText = text.replace(/\n/g, ' ')
                                .replace(/\./g, '.\n')
                                .replace(/^\s+/mg, '')
                                .replace(/\s+$/mg, '');
      this.$refs.output.value = formattedText;
    },
    selectAll(event) {
      // Workaround for Safari bug
      setTimeout(() => {
        event.target.select();
      }, 0);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

textarea {
    width: 340px;
    height: 300px;
}

a {
  color: #42b983;
}

.arrow {
  
}
</style>
