import React from 'react';
import { Linking, ScrollView } from 'react-native';

import { ButtonText, Label } from '#components';
import { COLORS } from '#config/design';
import { Section } from './components/Section';

export const AboutScreen = () => {
  const handleLink = async () => {
    try {
      await Linking.openURL('https://thecatapi.com');
    } catch (err) {
      console.log('Error link');
    }
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Section title="Nombre">Fernando Fuertes Fraile</Section>
      <Section title="Estimado equipo de TheCatAPI.com">
        <ButtonText onPress={handleLink}>https://thecatapi.com</ButtonText>
        {'\n\n'}Quiero expresar mi sincero agradecimiento por proporcionar un
        servicio excepcional a través de su API. La experiencia de integrar
        TheCatAPI en mi proyecto ha sido excepcional y enriquecedora.
        {'\n\n'}
        La diversidad y calidad de las imágenes de gatos que ofrece su API han
        agregado un toque especial a mi aplicación, capturando la atención y el
        cariño de los usuarios. La facilidad de uso de la API, junto con la
        documentación clara y completa, hizo que la integración fuera suave y
        sin complicaciones.
      </Section>
      <Section title="Fecha y Versión">
        Versión: 1.0{'\n'}
        Fecha de la versión: 21 de noviembre de 2023{'\n\n'}
        En este día sagrado, la aplicación{' '}
        <Label color={COLORS.secondary}>PruebaCats</Label> se presenta en su
        versión 1.0, como un testamento de nuestro incansable compromiso con la
        excelencia. En la fecha de este martes, día del señor 21 de noviembre de
        2023, damos vida a esta obra maestra tecnológica.
        {'\n\n'}
        Que esta versión sea recibida con la misma reverencia con la que fue
        creada. En esta jornada, marcada por la dedicación y el esfuerzo,
        celebramos el hito alcanzado y anticipamos con humildad los futuros
        logros.
        {'\n\n'}
        Bendiciones y gratitud a todos aquellos que han contribuido a este noble
        esfuerzo.
      </Section>
    </ScrollView>
  );
};
