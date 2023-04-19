/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const channelId = 'UCQJ5EyCZlcq942OQPS6Pr-Q';
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <TouchableOpacity
          onPress={() =>
            Linking.canOpenURL('youtube://channel/' + channelId).then(
              supported => {
                console.log('supported', supported);
                if (supported) {
                  return Linking.openURL('youtube://channel/' + channelId);
                } else {
                  return Linking.openURL(
                    'https://www.youtube.com/channel/' + channelId,
                  );
                }
              },
            )
          }>
          <Text>Open Youtube</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.canOpenURL('whatsapp://').then(supported => {
              console.log('supported', supported);
              if (supported) {
                return Linking.openURL('whatsapp://');
              } else {
                return Linking.openURL('https://wa.me/9877532562');
              }
            })
          }>
          <Text>Open Whatsapp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.canOpenURL('tg://').then(supported => {
              console.log('supported', supported);
              if (supported) {
                return Linking.openURL('tg://');
              } else {
                return Linking.openURL('http://www.telegram.me');
              }
            })
          }>
          <Text>Open Telegram</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Linking.canOpenURL('viber://').then(supported => {
              console.log('supported', supported);
              if (supported) {
                return Linking.openURL('viber://');
              } else {
                return Linking.openURL('http://www.viber.me');
              }
            })
          }>
          <Text>Open Telegram</Text>
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
