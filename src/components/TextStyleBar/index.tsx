import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';

type TextStyleBarProps = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  setBold: (bold: boolean) => void;
  setItalic: (italic: boolean) => void;
  setUnderline: (underline: boolean) => void;
};

export default function TextStyleBar({
  bold,
  italic,
  underline,
  setBold,
  setItalic,
  setUnderline,
}: TextStyleBarProps) {
  return (
    <div>
      <Button
        color='#ccc'
        onClick={() => setBold(!bold)}
        checked={bold}
      >
        <FontAwesomeIcon
          icon={faBold}
          color='#000'
        />
      </Button>

      <Button
        color='#ccc'
        onClick={() => setItalic(!italic)}
        checked={italic}
      >
        <FontAwesomeIcon
          icon={faItalic}
          color='#000'
        />
      </Button>

      <Button
        color='#ccc'
        onClick={() => setUnderline(!underline)}
        checked={underline}
      >
        <FontAwesomeIcon
          icon={faUnderline}
          color='#000'
        />
      </Button>
    </div>
  );
}
