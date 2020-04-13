import { resolve } from 'path';
import Mail from '../../lib/Mail';

class ParcelCancellationMail {
  get key() {
    return 'ParcelCancellationMail';
  }

  async handle({ data }) {
    const { parcelToCancel, deliver } = data;

    await Mail.sendMail({
      to: `${deliver.name} <${deliver.email}>`,
      subject: 'Entrega cancelada',
      template: 'parcelcancellationmail',
      context: {
        deliver: deliver.name,
        product_id: parcelToCancel.Package.id,
        product_name: parcelToCancel.Package.product,
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
          cid: 'fastfeet',
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
          cid: 'twitter',
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
          cid: 'instagram',
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
          cid: 'linkedin',
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
          cid: 'youtube',
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
          cid: 'facebook',
        },
      ],
    });
  }
}

export default new ParcelCancellationMail();
