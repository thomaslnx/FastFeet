import { resolve } from 'path';
import Mail from '../../lib/Mail';

class DeliverMail {
  get key() {
    return 'DeliverMail';
  }

  async handle({ data }) {
    const { deliveryManExists } = data;

    await Mail.sendMail({
      to: `${deliveryManExists.name} <${deliveryManExists.email}>`,
      subject: 'Nova entrega disponível',
      template: 'newdeliver',
      context: {
        deliver: deliveryManExists.name
      },
      attachments: [
        {
          filename: 'fastfeet.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'fastfeet.png'
          ),
          cid: 'fastfeet'
        },
        {
          filename: 'twitter.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'twitter.png'
          ),
          cid: 'twitter'
        },
        {
          filename: 'instagram.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'instagram.png'
          ),
          cid: 'instagram'
        },
        {
          filename: 'linkedin.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'linkedin.png'
          ),
          cid: 'linkedin'
        },
        {
          filename: 'youtube.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'youtube.png'
          ),
          cid: 'youtube'
        },
        {
          filename: 'fecebook.png',
          path: resolve(
            __dirname,
            '..',
            'views',
            'emails',
            'assets',
            'images',
            'facebook.png'
          ),
          cid: 'facebook'
        }
      ]
    });
  }
}

export default new DeliverMail();
