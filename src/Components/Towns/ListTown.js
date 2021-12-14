import React, {useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {getTowns} from '../../Actions/TownAction';

import Town from './Town';

const ListTown = props => {
  useEffect(() => {
    props.getTowns();
  }, []);

  return (
    <View style={{paddingBottom: 80}}>
      {props.towns.map(town => {
        return <Town key={town.id} name={town.name} id={town.id} />;
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {towns: state.towns};
};

const mapDispatchToProps = {
  getTowns: getTowns,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTown);
