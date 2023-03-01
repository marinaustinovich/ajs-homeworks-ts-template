import Device from "../domain/Device";

test('new device should be empty', () => {
  const device = new Device(1015,'Galaxy Fold', 3000, 2015,);

  expect(device.name).toBe('Galaxy Fold');
});

test('device.count should be 2 after add', () => {
  const device = new Device(1015,'Galaxy Fold', 3000, 2015,);
  device.add();

  expect(device.count).toBe(2);
});

test('device.count should be 1 after delete', () => {
  const device = new Device(1015,'Galaxy Fold', 3000, 2015,);
  device.add();
  device.delete();

  expect(device.count).toBe(1);
});
