import React from 'react';
import {View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import styles from './styles';

export default class La2013 extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  static navigationOptions={
    header: null  
  }
  render(){ 
    return(
      <View style={styles.parent}>
        <ScrollView>
          <View style={{height: '100%'}}>
            <View style={{marginLeft: '5%', marginTop: '4%'}}>
              <Text style={styles.titleText}>Origin</Text>
            </View>
            <View style={{margin: '5%'}}>
              <Text style={styles.text}>
                In the November of 1996, Vivek Krishnan, Harish K., Rahul Warrier and
                their 12th standard classmates pleaded with the class teacher: Madam,
                we need a break from the grind of textbooks and classes; let us organise
                an inter-school arts festival.{"\n"}
                The idea gathered momentum among the students. But somebody had
                to get the green light from the Principal Fr. Mani Manimala.
                One afternoon, as the school bell rang, the teacher — surrounded by
                students egging her on — told Fr. Mani, “The students have been saying
                that they want to organise a festival for schools in the city.” The
                Principal, full of energy but looking stern as ever, replied, “If you are
                ready to take full responsibility, go ahead.”{"\n"}
                The students who overheard this were ecstatic. The teacher, Deepa Pillai (DP) who had
                bravely conveyed the proposal could not back out. Her students would
                ensure that, year after year, until she bade the school adieu in 2008.
              </Text>
            </View>
            <View style={{marginLeft: '5%', marginTop: '4%'}}>
              <Text style={styles.titleText}>Life and Arts</Text>
            </View>
            <View style={{margin: '5%'}}>
              <Text style={styles.text}>
                The founding spirit of the Life and Arts Festival, or La Fest, is to take a break from academics.
                And the students live up to that spirit, taking every opportunity for the months prior to the fest
                to prevent other teachers and management from taking on responsibility, 
                organize, prepare scripts, rehearse, design, and most important, train their juniors 
                in ushering, assisting, and hosting. The briefing sessions in the early months of the year are
                instrumental not only in creating the most praised component of La Fest, the briefing system, 
                but also in molding future batches to carry on the spirit.{"\n"}
                Often remembered as the greatest stage in the city, La Fest has seen the birth and rise of some 
                of the best cultural acts the world over. Not only for its fame attracting the widest range of skill,
                but also for its variety in flavour, the events La Fest stages have cultivated art in every way from 
                dance and music to situational comedy and creativity.
              </Text>
            </View>
            <View style={{marginLeft: '5%', marginTop: '4%'}}>
              <Text style={styles.titleText}>Events</Text>
            </View>
            <View style={{margin: '5%'}}>
              <Text style={styles.text}>
                Participants were drawn to the events primarily for their unconventional, zany nature of competition.
                These events were designed to test everything, from musical skill, to stage presence.{"\n"}{"\n"}
                <Text style={styles.eventText}>Harmony</Text> - Electrify All Ears. Show off your melodies.{"\n"}{"\n"}
                <Text style={styles.eventText}>Enquesta</Text> - Knowledge is Might. Your quest for power ends here.{"\n"}{"\n"}
                <Text style={styles.eventText}>Block N{"\'"} Tangles</Text> - Be Funny. Be Different.{"\n"}{"\n"}
                <Text style={styles.eventText}>La Persona</Text> - Step into the Ninth Circle. Attain Immortality.{"\n"}{"\n"}
                <Text style={styles.eventText}>Dance O{"\'"} Mania</Text> - Where every step matters.{"\n"}{"\n"}
                <Text style={styles.eventText}>Shoot at Sight</Text> - Take Your Best Shot. Dream the Infinite.{"\n"}{"\n"}
                Every year, there was a new seventh event that was the creation of the hosting batch. Events have varied from
                dramas to murder mysteries, and advertising to humour through genre fusion.             
              </Text>
            </View>
            <Text style={{color: '#FFFFFF', fontSize: 16, fontFamily: 'Montserrat-Medium', textAlign: 'center', marginBottom: '5%'}}>
              There is something about life{"\n"}That sets art going
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
