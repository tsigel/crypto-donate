import { Signer } from '@waves/signer';
import { ProviderWeb } from '@waves.exchange/provider-web';

type Long = string | number

const provider = new ProviderWeb();
export const waves = new Signer();

waves.setProvider(provider);

export function donate(element: HTMLElement, amount: Long) {
    const label = document.querySelector('.waves__donate-label')!;
    waves
        .transfer({
            recipient: element.getAttribute('data-recipient')!,
            amount: amount,
            assetId: 'WAVES'
        })
        .broadcast()
        .then(
            () => {
                label.innerHTML = 'Thanks for your donation!';
            },
            (e) => {
                label.innerHTML = 'An error occurred. Check the console!';
                console.log(e);
            }
        );
}
