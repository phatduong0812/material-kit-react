import { Modal, Input, Card, Box, Typography, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Label from '../Label';

export interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const style = (theme: any) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 300, sm: 500, md: 800, lg: 1000 },
  height: { xs: 400, sm: 500, md: 600 },
  bgcolor: 'background.paper',
  p: 4,
  overflow: 'auto',
  maxHeight: '90vh',
  maxWidth: '90vw',
  borderRadius: 2,
});

export const ServiceForm = ({ isOpen, onClose }: ServiceFormProps) => {
  const theme = useTheme();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style(theme)}>
        <div>
          <Label htmlFor="inputTwo">Input with Placeholder</Label>
          <Input type="text" id="inputTwo" placeholder="info@gmail.com" />
        </div>
      </Box>
    </Modal>
  );
};