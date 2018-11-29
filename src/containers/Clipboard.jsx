import {
  connect,
} from 'react-redux';
import ClipboardComponent from '../components/Clipboard';

const mapStateToProps = state => ({
  notes: state.get('clipboard').toList(),
});

const Clipboard = connect(mapStateToProps)(ClipboardComponent);

export default Clipboard;
