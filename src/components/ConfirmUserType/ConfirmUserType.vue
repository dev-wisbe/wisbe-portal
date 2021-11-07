<template>
  <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card>
        <v-card-title class="text-h5">
          Como gostaria de se cadastrar?
        </v-card-title>

        <v-card-text>
          Escolha entre aluno e professor, caso queira se cadastrar como aluno posteriormente é possível criar um perfil de professor.
        </v-card-text>

        <div class="card-actions">
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Aluno
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Professor
          </v-btn>
					<v-spacer></v-spacer>
        </div >
      </v-card>
    </v-dialog>
</template>

<script>
export default {
	name: 'ConfirmUserType',
	data: () => {
	return {
			dialog: true,
		}
	}
}
</script>

<style lang="sass" scoped>
.card-actions
	display: flex
	flex-direction: row
	justify-content: space-between
</style>