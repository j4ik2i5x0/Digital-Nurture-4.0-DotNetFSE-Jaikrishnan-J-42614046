using NUnit.Framework;
using Moq;
using CustomerCommLib;

namespace CustomerCommTests
{
    [TestFixture]
    public class CustomerCommTests
    {
        private Mock<IMailSender> _mock;

        [OneTimeSetUp]
        public void Setup()
        {
            _mock = new Mock<IMailSender>();
        }

        [Test]
        public void SendMailToCustomer_ReturnsTrue()
        {
            // Arrange
            _mock.Setup(x => x.SendMail(It.IsAny<string>(), It.IsAny<string>())).Returns(true);
            CustomerComm customerComm = new CustomerComm(_mock.Object);

            // Act
            bool result = customerComm.SendMailToCustomer();

            // Assert
            Assert.That(result, Is.True);
        }
    }
}
