import { z } from 'zod';

const exerciseValidator = z.object({
  name: z.string().nonempty('Name is required').trim().min(3, 'Name must be at least 3 characters').max(50, 'Name must be at most 50 characters'),
  muscle_group: z.string().nonempty('Muscle group is required').trim().min(3, 'Muscle group must be at least 3 characters').max(100, 'Muscle group must be at most 50 characters'),
  equipment: z.string().nonempty('Equipment is required').trim().min(3, 'Equipment must be at least 3 characters').max(100, 'Equipment must be at most 100 characters'),
  instructions: z.string().nonempty('Instructions are required').trim().min(3, 'Instructions must be at least 3 characters').max(1000, 'Instructions must be at most 1000 characters'),
  video_url: z.string().url('Invalid URL format').trim(),
});

export default exerciseValidator;