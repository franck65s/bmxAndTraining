<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <div class="title">
            <form @submit.prevent="validateForm">
              <v-row row>
                <v-col xs12>
                  <v-text-field v-model="form.name" name="name" label="Name" hint="At least 8 characters" append-icon="remove_red_eye" v-bind:rules="rules.name"
                    v-validate="'required'"></v-text-field>
                </v-col>
                <v-col xs12>
                  <v-text-field v-model="form.email" name="email" label="Email" hint="At least 8 characters" append-icon="remove_red_eye" v-bind:rules="rules.email"
                    v-validate="'required|email'"></v-text-field>
                </v-col>
                <v-col xs12>
                  <v-dialog persistent v-model="modal" lazy>
                    <v-text-field slot="activator" label="Picker in dialog" v-model="e3" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="e3" scrollable></v-date-picker>
                  </v-dialog>
                </v-col>

                <v-col xs12>
                  <v-menu lazy :close-on-content-click="false" v-model="menu" transition="v-scale-transition" offset-y :nudge-left="56">
                    <v-text-field slot="activator" label="Picker in menu" v-model="e3" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="e3" no-title scrollable actions>
                      <template scope="{ save, cancel }">
                        <v-card-row actions>
                          <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                          <v-btn flat primary @click.native="save()">Save</v-btn>
                        </v-card-row>
                      </template>
                    </v-date-picker>
                  </v-menu>
                </v-col>

                <v-btn primary type="submit">Submit</v-btn>
              </v-row>
            </form>
          </div>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    name: 'formulaire',

    data() {
    return {
      form: {
        name: "",
        email: ""
      },
      rules: {
        name: [],
        email: []
      }
    };
  },
  watch: {
    errors: {
      handler: function(val, oldVal) {
        _.forEach(this.rules, (val, key) => {
          this.rules[key] = [() => (this.errors.has(key) ? this.errors.first(key) : true)];
        });
      },
      deep: true
    },
  },
  methods: {
    validateForm() {
      this.$validator.validateAll()
        .then(() => {
          console.log("data", this.form);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #e3,
  #e3 .container {
    min-height: 700px;
    overflow: hidden;
    z-index: 0;
  }

  #e3 .input-group__details:after {
    background-color: rgba(255, 255, 255, 0.32) !important;
  }

  #e3 .input-group--focused .input-group__append-icon {
    color: inherit !important;
  }

</style>
