import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            color="success"
            name="username"
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            color="danger"
            name="email"
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
      </Form.Field>

      <Form.Field>
  <Form.Label>Subject</Form.Label>
  <Form.Control>
    <Form.Select
      name="subject"
      value={subject}
      onChange={e => setSubject(e.target.value)}
      isRounded
      fullwidth
    >
      <option value="">Select a subject</option>
      <option value="general">General Inquiry</option>
      <option value="support">Support</option>
      <option value="feedback">Feedback</option>
      <option value="other">Other</option>
    </Form.Select>
  </Form.Control>
</Form.Field>

{subject === 'other' && (
  <Form.Field>
    <Form.Label>Custom Subject</Form.Label>
    <Form.Control>
      <Form.Input
        name="customSubject"
        value={customSubject}
        onChange={e => setCustomSubject(e.target.value)}
        placeholder="Enter your subject"
        isRounded
      />
    </Form.Control>
  </Form.Field>
)}

      <Form.Field>
        <Form.Label>Message</Form.Label>
        <Form.Textarea
          name="message"
          value=""
          onChange={(e) => {
            return setMessage(e.target.value); // make sure you define setMessage if using state
          }}
        />
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">Submit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>

    </form>
}