
<template>
    <el-dialog :visible.sync="visibleDialog" v-bind="$attrs" v-on="$listeners">
      <slot></slot>
      <template #footer>
        <slot name="footer">
          <div class="dialog-footer-ct">
            <el-button @click="cancelOp">取 消</el-button>
            <el-button @click="sureOp" type="primary">确 定</el-button>
          </div>
        </slot>
      </template>
    </el-dialog>
</template>

<script>
    export default {
      name: 'dialog-with-btn',
      props: {
        visible: {
          default: false,
          type: Boolean,
        },

      },
      computed: {
        visibleDialog: {
          get() {
            return this.visible
          },
          set(val) {
            this.$emit('update:visible', val)
          },

        },
      },
      methods: {
        cancelOp() {
          this.$emit('onCancelEvent')
          this.visibleDialog = false;
        },
        sureOp() {
          this.$emit('onSureEvent')
          this.visibleDialog = false;
        },

      },
     //  data:{
     //      return {
     //        visibleDialog
     //      }
     // }
    }
</script>

<style scoped>
  .dialog-footer-ct{
    margin: 10px auto;
    text-align: center;
  }

</style>
