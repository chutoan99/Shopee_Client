export interface Notification {
  id:        number;
  image:     string;
  title:     string;
  content:   string;
  userid:    null;
  seen:      number;
  time:      string;
  is_active: number;
  createdAt: Date;
  updatedAt: Date;
  deleteAt:  null;
}
