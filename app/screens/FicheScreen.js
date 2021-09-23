import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import SelectMultiple from "react-native-select-multiple";

function FicheScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.formWrapper}>
        <Text style={styles.welcometext}>Fiche d'investigation</Text>
        <Text style={styles.infostext}>Volet informations personnelles: </Text>
        <View style={styles.formRow}>
          <TextInput style={styles.textInput} placeholder="Tapez votre nom" />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Tapez votre prénom"
          />
        </View>
        <View style={styles.formRow}>
          <TextInput style={styles.textInput} placeholder="Tapez votre age" />
        </View>

        <View style={styles.formRow}>
          <Text style={styles.textstyle}>Sexe: </Text>
          <DropDownPicker
            items={[
              { label: "Femme", value: "f" },
              { label: "Homme", value: "h" },
            ]}
            containerStyle={styles.drop}
          />
        </View>

        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Tapez votre adresse"
          />
        </View>
        <View style={styles.formRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Tapez votre téléphone"
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.textstyle}>Région: </Text>
          <DropDownPicker
            items={[
              { label: "Tanger-Tétouan-Al Hoceïma", value: "1" },
              { label: "L'Oriental", value: "2" },
              { label: "Fès-Meknès", value: "3" },
              { label: "Rabat-Salé-Kénitra", value: "4" },
              { label: "Béni Mellal-Khénifra", value: "5" },
              { label: "Casablanca-Settat", value: "6" },
              { label: "Marrakech-Safi", value: "7" },
              { label: "Drâa-Tafilalet", value: "8" },
              { label: "Souss-Massa", value: "9" },
              { label: "Guelmim-Oued Noun", value: "10" },
              { label: "Laâyoune-Sakia El Hamra", value: "11" },
              { label: "Dakhla-Oued Ed Dahab", value: "12" },
            ]}
            containerStyle={styles.drop}
          />
        </View>
        <Text style={styles.infostext}> Volet question: </Text>
        <View style={styles.formRow}>
          <Text style={styles.textstyle}>
            - Avez-vous été testé pour le corona virus?:{" "}
          </Text>
          <DropDownPicker
            items={[
              { label: "Non effectué.", value: "1" },
              {
                label: "Oui. et le résultat du test est négatif.",
                value: "2",
              },
              {
                label: "Oui et en attente du résultat du test .",
                value: "3",
              },
              {
                label: "Oui. et le résultat du test est positif.",
                value: "4",
              },
            ]}
            containerStyle={styles.drop}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.textstyle}>
            - En ce qui concerne l'isolement médical. lequel des éléments
            suivants s'applique à vous:{" "}
          </Text>
          <DropDownPicker
            items={[
              {
                label:
                  "Je suis en isolement médical parce que j'ai rencontré une personne contaminée.",
                value: "1",
              },
              {
                label:
                  "Je suis en isolement médical parce que j'ai des symptômes.",
                value: "2",
              },
              {
                label:
                  "Je ne suis pas en isolement médical mais j'étais proche de quelqu'un en isolement médical.",
                value: "3",
              },
              { label: "Je ne suis pas en isolement médical.", value: "4" },
            ]}
            containerStyle={styles.drop}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.textstyle}>
            -Avez-vous actuellement ou avez-vous déjà vécu l'une des situations
            suivantes:{" "}
          </Text>
          <DropDownPicker
            items={[
              { label: "Insuffisance cardiaque chronique.", value: "1" },
              { label: "Diabète.", value: "2" },
              { label: "Hypertension artérielle.", value: "3" },
              { label: "Maladie rénale chronique.", value: "4" },
              { label: "Maladie pulmonaire chronique.", value: "5" },
              { label: "Le cancer.", value: "6" },
              { label: "Système immunitaire affaibli.", value: "7" },
              { label: "Cas précédent de crise cardiaque.", value: "8" },
              { label: "Prenez des médicaments anti-immuns.", value: "9" },
            ]}
            containerStyle={styles.drop}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.textstyle}>
            -Avez-vous eu les symptômes suivants aujourd'hui?. Veuillez les
            cocher si c'est le cas :
          </Text>
          <SelectMultiple
            items={[
              { label: "Fièvre supérieure à 38 degrés.", value: "1" },
              { label: "Difficulté à respirer.", value: "2" },
              { label: "Maux d'estomac.", value: "3" },
              { label: "Douleurs musculaires.", value: "4" },
              { label: "Fatigue ou faiblesse importante.", value: "5" },
              { label: "Congestion nasale ou nez qui coule.", value: "6" },
              { label: "Inflammation de la gorge.", value: "7" },
              { label: "Toux sèche.", value: "8" },
              { label: "Toux Avec mucus.", value: "9" },
            ]}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.textstyle}>
            -Depuis combien du temps avez-vous toussé ?
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Tapez le nombre de jours"
          />
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.signinbtn}>
          <Text style={styles.signintxt}>Valider</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  formWrapper: {
    width: "80%",
  },
  formRow: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#9E95B3",
    height: 40,
    paddingHorizontal: 10,
  },
  welcometext: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 50,
    fontSize: 20,
    color: "#9E95B3",
    fontWeight: "bold",
  },
  signinbtn: {
    backgroundColor: "#1532BB",
    paddingVertical: 10,
    marginTop: 30,
    marginBottom: 100,
  },
  signintxt: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  drop: {
    //backgroundColor: "#9E95B3",
    height: 60,
    width: "100%",
    paddingHorizontal: 10,
  },
  infostext: {
    textAlign: "left",
    marginBottom: 10,
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  textstyle: {
    marginBottom: 10,
  },
});

export default FicheScreen;
