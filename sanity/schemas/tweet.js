export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description: 'Adimin controls: Togle if Tweet is deemed inappropriate',
      type: 'boolean'
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Img',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Twiter Image',
      type: 'string'
    }
  ],
}
